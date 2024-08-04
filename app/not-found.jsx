import Link from "next/link";
import { headers } from "next/headers";

export default async function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        height: "500px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p
        style={{
          border: "1px solid orange",
          borderRadius: 10,
          color: "blue",
          background: "cyan",
          color: "coral",
          padding: 5,
          marginTop: "2rem",
        }}
      >
        <Link href="/">Back to home</Link>
      </p>
    </div>
  );
}
