const siteRedirects = {
    redirects: [
        {
            to: '/developers/weaviate/roadmap',
            from: [
                // '/developers/weaviate/current/roadmap', // handled by createRedirects
                '/developers/weaviate/current/roadmap/architectural-roadmap.html',
                '/developers/weaviate/current/roadmap/feature-roadmap.html',
            ]
        },              
        {
            to: '/developers/weaviate/core-knowledge/data',
            from: '/developers/weaviate/current/core-knowledge/basics.html'
        },
        {
            to: '/developers/weaviate/client-libraries',
            from: '/developers/weaviate/current/core-knowledge/clients.html'
        },
        {
            to: '/developers/weaviate/getting-started/console',
            from: '/developers/weaviate/current/core-knowledge/console.html'
        },
        {
            to: '/developers/weaviate/configuration/schema-configuration',
            from: '/developers/weaviate/current/schema'
        },
        {
            to: '/developers/weaviate/configuration/datatypes',
            from: '/developers/weaviate/current/schema/datatypes.html'
        },
        {
            to: '/developers/weaviate/configuration/schema-configuration',
            from: '/developers/weaviate/current/schema/schema-configuration.html'
        },
        {
            to: '/developers/weaviate/guides/',
            from: '/developers/weaviate/current/tutorials'
        },
        {
            to: '/developers/weaviate/more-resources/example-datasets',
            from: '/developers/weaviate/current/tutorials/example-datasets.html'
        },
        {
            to: '/developers/weaviate/guides/how-to-create-a-schema',
            from: '/developers/weaviate/current/tutorials/how-to-create-a-schema.html'
        },
        {
            to: '/developers/weaviate/guides',
            from: '/developers/weaviate/current/tutorials/how-to-do-classification.html'
        },
        {
            to: '/developers/weaviate/guides',
            from: '/developers/weaviate/current/tutorials/how-to-perform-a-semantic-search.html'
        },
        {
            to: '/developers/weaviate/guides',
            from: '/developers/weaviate/current/tutorials/how-to-query-data.html'
        },
        {
            to: '/developers/weaviate/guides',
            from: '/developers/weaviate/current/tutorials/how-to-use-weaviate-without-modules.html'
        },
        {
            to: '/developers/weaviate/guides',
            from: '/developers/weaviate/current/tutorials/other-examples.html'
        },
        {
            to: '/developers/weaviate/guides',
            from: '/developers/weaviate/current/tutorials/quick-start-with-the-text2vec-contextionary-module.html'
        },
        {
            to: '/developers/weaviate/guides',
            from: '/developers/weaviate/current/tutorials/semantic-search-through-wikipedia.html'
        },
        {
            to: '/developers/weaviate/more-resources/write-great-bug-reports',
            from: '/developers/weaviate/current/tutorials/write-great-bug-reports.html'
        },
        {
            to: '/developers/weaviate/architecture/vector-index-plugins',
            from: '/developers/weaviate/current/vector-index-plugins'
        },
        {
            to: '/developers/weaviate/configuration/distances',
            from: '/developers/weaviate/current/vector-index-plugins/distances.html'
        },
        {
            to: '/developers/weaviate/architecture/vector-index-plugins',
            from: '/developers/weaviate/current/vector-index-plugins/hnsw.html'
        },
        {
            to: '/developers/weaviate/',
            from: '/developers/weaviate/current/more-resources/deprecation-messages.html'
        },
    ],
    createRedirects(existingPath) {
        if (existingPath.includes('/blog')) {
            // Redirect from /blog/2022/06/{X} (etc) to /blog/{X}
            return [
                existingPath.replace('/blog', '/blog/2021/01'),
                existingPath.replace('/blog', '/blog/2021/02'),
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
            ];
        }
        if (existingPath.includes('/references/graphql')) {
            return [
                existingPath.replace('/references/graphql', '/current/graphql-references'),
            ]
        }
        if (existingPath.includes('/modules/retriever-vectorizer-modules')) {
            return [
                existingPath.replace('/modules/retriever-vectorizer-modules', '/current/retriever-vectorizer-modules'),
            ]
        }
        if (existingPath.includes('/modules/reader-generator-modules')) {
            return [
                existingPath.replace('/modules/reader-generator-modules', '/current/reader-generator-modules'),
            ]
        }
        if (existingPath.includes('/modules/other-modules')) {
            return [
                existingPath.replace('/modules/other-modules', '/current/other-modules'),
            ]
        }
        if (existingPath.includes('/references/rest')) {
            return [
                existingPath.replace('/references/rest', '/current/restful-api-references'),
            ]
        }
        if (existingPath.includes('/developers/weaviate')) {
            return [
                existingPath.replace('/developers/weaviate', '/developers/weaviate/current'),
            ]
        }
        if (existingPath.includes('/contributor-guide/weaviate-modules')) {
            return [
                existingPath.replace('/developers/contributor-guide/weaviate-modules', '/developers/contributor-guide/current/weaviate-module-system'),
            ]
        }
        if (existingPath.includes('/contributor-guide')) {
            return [
                existingPath.replace('/developers/contributor-guide', '/developers/contributor-guide/current'),
            ]
        }

        return undefined; // Return a falsy value: no redirect created
    },
}

module.exports = siteRedirects;