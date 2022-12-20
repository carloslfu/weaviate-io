const siteRedirects = {
    fromExtensions: ['html'], // /myPage.html -> /myPage
    // toExtensions: ['exe', 'zip'], // /myAsset -> /myAsset.zip (if latter exists)
    redirects: [
        // /docs/oldDoc -> /docs/newDoc
        {
            to: '/developers/weaviate/roadmap',
            from: [
                '/developers/weaviate/current/roadmap/architectural-roadmap.html',
                '/developers/weaviate/current/roadmap/feature-roadmap.html',
            ]
        },
        // {
        //     to: '/blog/understand-your-unstructured-data',
        //     from: '/blog/2021/01/understand-your-unstructured-data.html',
        // },
        // Redirect from multiple old paths to the new path
        // {
        //     to: '/docs/newDoc2',
        //     from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],
        // },
    ],
    createRedirects(existingPath) {
        if (existingPath.includes('/blog')) {
            // Redirect from /blog/2022/06/{X} to /blog/{X}
            return [
                // existingPath.replace('/blog', /\/blog\/202[12]\/[01][0-9]/),
                existingPath.replace('/blog', '/blog/2021/01'),
                existingPath.replace('/blog', '/blog/2021/03'),
                existingPath.replace('/blog', '/blog/2021/05'),
                existingPath.replace('/blog', '/blog/2021/11'),
                existingPath.replace('/blog', '/blog/2022/06'),
                existingPath.replace('/blog', '/blog/2022/07'),
                existingPath.replace('/blog', '/blog/2022/08'),
                existingPath.replace('/blog', '/blog/2022/09'),
                existingPath.replace('/blog', '/blog/2022/10'),
                existingPath.replace('/blog', '/blog/2022/11'),
                existingPath.replace('/blog', '/blog/2022/12'),
                
                //   existingPath.replace('/blog', '/docs/support'),
            ];
        }
        return undefined; // Return a falsy value: no redirect created
    },
}

module.exports = siteRedirects;