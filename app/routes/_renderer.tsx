import { jsxRenderer, useRequestContext } from "hono/jsx-renderer";
import { Link } from "honox/server";
import { Layout } from "@/components/Layout";
import { getThemeCookie } from "@/shared/theme";
import { AUTH_KEYS } from "@/shared/auth";
import { configs } from "@/constants";
import { getCookie } from "hono/cookie";

const { title } = configs.site;

export default jsxRenderer(({ children }) => {
  const ctx = useRequestContext();
  const theme = getThemeCookie(ctx);
  const isAuthenticated = Boolean(
    getCookie(ctx, AUTH_KEYS.authToken) ||
      getCookie(ctx, AUTH_KEYS.refreshToken),
  );
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {title ? <title>{title}</title> : <></>}

        <Link href="/app/styles.css" rel="stylesheet" />
        <script src="/static/js/htmx.min.js" />

        <Link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>

      <Layout
        theme={theme}
        title="Hello World 🌎"
        navbar={{ theme, isAuthenticated }}
      >
        {children}
      </Layout>
    </html>
  );
});
