import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import CustomLink from './Link'

export const components: MDXComponents = {
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm,
}
