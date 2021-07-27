import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PageBanner from "../common/PageBanner"
import AudioPlayer from "../common/AudioPlayer/AudioPlayer"
// import AudioPlayer from "react-h5-audio-player"
// import "react-h5-audio-player/lib/styles.css"

const ProjectDetails = ({ dynamicPageItem }) => {
  // get project fields
  const { customFields } = dynamicPageItem

  const data = useStaticQuery(graphql`
    query {
      allAgilityProject {
        nodes {
          contentID
          songs {
            customFields {
              title
              projectType_TextField
              song {
                label
                url
              }
            }
          }
        }
      }
    }
  `)

  // get all projects
  const projects = data.allAgilityProject.nodes

  // filter out the project we're looking for to so we can also get linked content (songs)
  const project = projects.filter(
    project => project.contentID === dynamicPageItem.contentID
  )

  // get songs
  const songs = project[0].songs

  // if no songs, return messaging
  if (songs.length <= 0) {
    return (
      <section className="container px-4">
        <PageBanner
          image={customFields.bannerImage}
          title={customFields.title}
        />
        <p>no songs</p>
      </section>
    )
  }

  // if songs array length is less than or equal to 4, return list view
  if (songs.length <= 4) {
    return (
      <section className="container px-4">
        <PageBanner
          image={customFields.bannerImage}
          title={customFields.title}
        />
        <div className="mb-8">
          {songs.map((song, index) => (
            <AudioPlayer
              song={song.customFields.song?.url}
              title={song.customFields.title}
              type={song.customFields.projectType_TextField
                .split(",")
                .join(", ")}
            />
          ))}
        </div>
      </section>
    )
  }

  // if songs array length is greater than 4, return grid view
  if (songs.length > 4) {
    return (
      <section className="container px-4">
        <PageBanner
          image={customFields.bannerImage}
          title={customFields.title}
        />
        <div className="mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            {songs.map((song, index) => (
              <AudioPlayer
                key={index}
                grid={true}
                song={song.customFields.song?.url}
                title={song.customFields.title}
                type={song.customFields.projectType_TextField
                  .split(",")
                  .join(", ")}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default ProjectDetails
