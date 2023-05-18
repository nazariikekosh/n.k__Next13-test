import React from 'react'

interface Props {
    slug: string;
}


//client-side
const TestSlug = () => {
    return <>TestSlug: {}</>
}

//server-side
// export async function getServerSideProps (context:any) {
//     const {params} = context;
//     const {slug} = params;
//     console.log("slug", slug);
//     return {
//         props: {
//             slug,
//         },
//     };
// }

export default TestSlug