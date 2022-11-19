import * as React from 'react'
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export const query = graphql`
{ 
    projectCover:file(relativePath:{ eq: "git-cover.jpg" }) {
        childImageSharp { 
            fluid(maxWidth:900) {
                ...GatsbyImageSharpFluid
            }
        }
    }
}
`;

const DynamicImg = () => { 
    
    return(
        <GatsbyImage image = {query.data.projectCover.childImageSharp.fluid} />
    )


}

export default DynamicImg

/*   */