import GithubIcon from "@/components/icons/GitHubIcon";
import { configs } from "@/constants";
import { Logo } from "@/components/Logo";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import type { Theme } from "@/shared/theme.ts";
import { defineMenuLinks } from "@/shared/links";

export type NavBarProps = {
  theme: Theme;
  isAuthenticated: boolean;
};

export const NavBar = ({ theme, isAuthenticated }: NavBarProps) => (
  <div class="navbar skip-printer">
    <div class="navbar-start">
      <Menu isAuthenticated={isAuthenticated} />
    </div>

    <div class="navbar-center">
      <Logo />
    </div>

    <div class="navbar-end">
      <ThemeSwitcher theme={theme} />

      <a href={configs.repo} target="_black" class="btn btn-ghost btn-circle">
        <GithubIcon />
      </a>
    </div>
  </div>
);

const Menu = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const menuLinks = defineMenuLinks(
    { href: "/", name: "Home" },
    { href: "/about", name: "About" },
    // public
    { href: "/login", name: "Sign in", hide: isAuthenticated },
    // private
    { href: "/api/auth/logout", name: "Sign out", hide: !isAuthenticated },
  );

  return (
    <div class="dropdown" as="button" type="button">
      <button type="button" class="btn btn-ghost btn-circle">
        <MenuIcon />
      </button>
      <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {menuLinks.map((link) => (
          <li key={link}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <title>Menu</title>
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 6h16M4 12h16M4 18h7"
    />
  </svg>
);
