import { UpdatePageAttributesProps } from './_types'

export const updatePageAttributes = ({
  title,
  description,
}: UpdatePageAttributesProps) => {
  const base = 'TMDB - PQP Test technique'
  document.title = title && title.length > 0 ? `${title} | ${base}` : base

  if (description) {
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    } else {
      const newMetaDescription = document.createElement('meta')
      newMetaDescription.name = 'description'
      newMetaDescription.content = description
      document.head.appendChild(newMetaDescription)
    }
  }
}
