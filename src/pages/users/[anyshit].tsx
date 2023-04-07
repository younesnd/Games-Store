import { NextPage } from 'next'
import { useRouter } from 'next/router'

type PostPageProps = {
  children?: React.ReactNode
}

const PostPage: NextPage<PostPageProps> = (props) => {
  const router = useRouter()
  const { anyshit } = router.query
  return (
    <div style={{ maxWidth: 400, margin: '0 auto' }}> Post ID: {anyshit}</div>
  )
}
export default PostPage
