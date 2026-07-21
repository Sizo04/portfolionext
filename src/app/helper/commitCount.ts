// Fetch once — account creation date + repo count
async function getProfileInfo(login: string) {
  const query = `query($login: String!) {
    user(login: $login) {
      createdAt
      repositories(ownerAffiliations: OWNER, isFork: false) {
        totalCount
      }
    }
  }`;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: { login } }),
  });

  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));

  return {
    createdAt: json.data.user.createdAt,
    repoCount: json.data.user.repositories.totalCount,
  };
}

// Fetch per year — commit contributions only
async function fetchYearCount(login: string, from: string, to: string) {
  const query = `query($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        totalCommitContributions
      }
    }
  }`;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: { login, from, to } }),
  });

  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));

  return json.data.user.contributionsCollection
    .totalCommitContributions as number;
}

export async function getPortfolioStats(login: string) {
  const { createdAt, repoCount } = await getProfileInfo(login);
  const startYear = new Date(createdAt).getFullYear();
  const currentYear = new Date().getFullYear();

  let totalCommits = 0;
  for (let year = startYear; year <= currentYear; year++) {
    totalCommits += await fetchYearCount(
      login,
      `${year}-01-01T00:00:00Z`,
      `${year}-12-31T23:59:59Z`,
    );
  }

  return { totalCommits, repoCount };
}
