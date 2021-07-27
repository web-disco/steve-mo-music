import RichTextArea from "./RichTextArea"
import HomeBanner from "./HomeBanner"
import Biography from "./Biography"
import DiscographyListing from "./DiscographyListing"
import ProjectDetails from "./ProjectDetails"
import ContactForm from "./ContactForm"

// All of the Agility Page Module Components that are in use in this site need to be imported into this index file.
// Place Page Modules in allModules array below, passing in a name and the component.

const allModules = [
  { name: "HomeBanner", module: HomeBanner },
  { name: "RichTextArea", module: RichTextArea },
  { name: "Biography", module: Biography },
  { name: "DiscographyListing", module: DiscographyListing },
  { name: "ProjectDetails", module: ProjectDetails },
  { name: "ContactForm", module: ContactForm },
]

export const getModule = moduleName => {
  if (!moduleName) return null
  const obj = allModules.find(
    m => m.name.toLowerCase() === moduleName.toLowerCase()
  )
  if (!obj) return null
  return obj.module
}
