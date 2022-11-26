// our-domain.com/news
import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <a href="/news/nextjs-is-a-great-framework">
            NextJS is a great framework
          </a>
        </li>
        <li>
          <Link href="/news/nextjs-is-a-great-framework-no-refreshing">
            (Without Refreshing) NextJS is a great framework
          </Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
