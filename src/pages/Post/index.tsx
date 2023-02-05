/* eslint-disable react/no-children-prop */
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useParams } from 'react-router-dom'
import { HeaderCard } from './components/HeaderCard'
import { PostContent } from './styles'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { useQuery } from '@tanstack/react-query'
import { fetchRepositorio } from '../../api/api'

export function Post() {
  const { repoId } = useParams()

  const { data, isFetching } = useQuery({
    queryKey: ['repo'],
    queryFn: () => fetchRepositorio(repoId as string),
  })

  return (
    <>
      {!isFetching && (
        <HeaderCard
          user={data!.user.login}
          title={data!.title}
          date={data!.created_at}
          commnent={data!.comments}
        />
      )}
      {!isFetching && (
        <PostContent>
          <ReactMarkdown
            children={data!.body}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={dracula as any}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
            }}
          />
        </PostContent>
      )}
    </>
  )
}
