export async function getProjects() {
  // In a real scenario, we might fetch from GitHub API directly here.
  // For this portfolio, we'll curate the list based on the user's repositories we analyzed.
  // We can also add a "fetch from API" fallback if needed, but curation is usually better for portfolios.
  
  const featuredProjects = [
    {
      name: "Taskey",
      description: "A full-stack task management application with frontend in TypeScript and backend in PHP.",
      html_url: "https://github.com/roshanlimbu/Taskey_frontend",
      tags: ["TypeScript", "PHP", "Full Stack"],
      stars: 0 // Placeholder
    },
    {
      name: "yt_dld",
      description: "A YouTube video downloader CLI tool built with TypeScript.",
      html_url: "https://github.com/roshanlimbu/yt_dld",
      tags: ["TypeScript", "CLI", "Tool"],
      stars: 0
    },
    {
      name: "nvim_config_2025",
      description: "My personal Neovim configuration for 2025 based on Kickstart.nvim.",
      html_url: "https://github.com/roshanlimbu/nvim_config_2025",
      tags: ["Lua", "Neovim", "Config"],
      stars: 2
    },
    {
      name: "png_to_svg",
      description: "A tool to convert PNG images to SVG format.",
      html_url: "https://github.com/roshanlimbu/png_to_svg",
      tags: ["TypeScript", "Image Processing"],
      stars: 0
    },
    {
      name: "wireguard-install",
      description: "WireGuard road warrior installer for various Linux distributions.",
      html_url: "https://github.com/roshanlimbu/wireguard-install",
      tags: ["Shell", "DevOps", "VPN"],
      stars: 0
    }
  ];

  return featuredProjects;
}

export async function getProfile() {
  return {
    name: "Roshan Limbu",
    login: "roshanlimbu",
    bio: "Developer from Nepal. Passionate about web development, tools, and Neovim.",
    avatar_url: "https://avatars.githubusercontent.com/u/73947342?v=4",
    html_url: "https://github.com/roshanlimbu",
    location: "Sundarharaica-1, Morang- Nepal",
    social: {
      github: "https://github.com/roshanlimbu",
      facebook: "https://www.facebook.com/roshan.limbu.96387",
      website: "https://roshanlimbu.github.io/My-Site/"
    }
  };
}
