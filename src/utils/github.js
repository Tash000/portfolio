// ============================================================
// GitHub API — Fetch repos & profile for Tash000
// ============================================================

const GITHUB_USERNAME = "Tash000";
const GITHUB_API = "https://api.github.com";

// Fallback data when the API is unreachable or rate-limited
const FALLBACK_REPOS = [
  {
    name: "git-workflow-skill",
    description:
      "End-to-end GitHub delivery skill for AI agents: branch, commit, PR, merge",
    language: "JavaScript",
    stars: 1,
    url: `https://github.com/${GITHUB_USERNAME}/git-workflow-skill`,
    updatedAt: new Date().toISOString(),
    topics: ["ai-agent", "github", "automation"],
  },
  {
    name: "job-fit-ai",
    description:
      "AI job application copilot — ATS scoring, gap analysis, and resume optimization",
    language: "Python",
    stars: 0,
    url: `https://github.com/${GITHUB_USERNAME}/job-fit-ai`,
    updatedAt: new Date().toISOString(),
    topics: ["ai", "nlp", "career"],
  },
  {
    name: "edge-ai-bench",
    description:
      "Community benchmarking tool for local AI models on low-end hardware",
    language: "Python",
    stars: 0,
    url: `https://github.com/${GITHUB_USERNAME}/edge-ai-bench`,
    updatedAt: new Date().toISOString(),
    topics: ["benchmark", "ai", "edge-computing"],
  },
];

const FALLBACK_PROFILE = {
  avatar_url: `https://github.com/${GITHUB_USERNAME}.png`,
  name: "Toushif",
  bio: "Robotics Engineer | AI Developer | Full-Stack Builder",
  public_repos: 10,
  followers: 0,
};

/**
 * Fetch public (non-fork) repositories, sorted by most recently updated.
 * Returns a normalised array of repo objects.
 */
export async function fetchGitHubRepos() {
  try {
    const response = await fetch(
      `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated&direction=desc`,
      {
        headers: { Accept: "application/vnd.github.v3+json" },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`);
    }

    const data = await response.json();

    return data
      .filter((repo) => !repo.fork)
      .map((repo) => ({
        name: repo.name,
        description: repo.description || "No description provided",
        language: repo.language || "N/A",
        stars: repo.stargazers_count,
        url: repo.html_url,
        updatedAt: repo.updated_at,
        topics: repo.topics || [],
      }));
  } catch (error) {
    console.warn("Failed to fetch GitHub repos, using fallback data:", error.message);
    return FALLBACK_REPOS;
  }
}

/**
 * Fetch the GitHub user profile.
 */
export async function fetchGitHubProfile() {
  try {
    const response = await fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`, {
      headers: { Accept: "application/vnd.github.v3+json" },
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`);
    }

    const data = await response.json();

    return {
      avatar_url: data.avatar_url,
      name: data.name || GITHUB_USERNAME,
      bio: data.bio || "",
      public_repos: data.public_repos,
      followers: data.followers,
    };
  } catch (error) {
    console.warn("Failed to fetch GitHub profile, using fallback data:", error.message);
    return FALLBACK_PROFILE;
  }
}
