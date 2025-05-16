/** Add your relevant code here for the issue to reproduce */
/**
 * generate 1024KB of random text
 */
function randomText() {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  return Array.from({ length: 1024 ** 2 }, () =>
    possible.charAt(Math.floor(Math.random() * possible.length))
  ).join("");
}

export const metadata = {
  title: "This will not be visible if shared via Slack, X, or Facebook",
  description:
    "This will also not be visible if shared via Slack, X, or Facebook",
};

export default function Home() {
  return (
    <>
      hello world
      <style href="large-css" precedence="abc">{`
        .${randomText()} {
          color: red;
        }
      `}</style>
    </>
  );
}
