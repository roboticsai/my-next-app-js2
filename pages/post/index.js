import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'
import Post from '../../components/post'
import { GetPosts } from '../../lib/postdata_api'

export const getStaticProps = async (_context) => {
  // fetch list of posts
  const posts = await GetPosts()
  return {
    props: {
      postDataList: posts,
    },
  }
}

const IndexPage = ({
  postDataList,
}) => {
  return (
    <main>
      <Head>
        <title>Home page</title>
      </Head>

      <h1>List of posts</h1>

      <section>
        {postDataList.map((post) => (
          <Post {...post} key={post.id} />
        ))}
      </section>
    </main>
  )
}

export default IndexPage