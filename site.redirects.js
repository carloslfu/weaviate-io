const siteRedirects = {
    // fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
    // toExtensions: ['exe', 'zip'], // /myAsset -> /myAsset.zip (if latter exists)
    redirects: [
        // /docs/oldDoc -> /docs/newDoc
        {
            to: '/developers/weaviate/roadmap',
            from: [
                // '/developers/weaviate/current/roadmap', // handled by createRedirects
                '/developers/weaviate/current/roadmap/architectural-roadmap.html',
                '/developers/weaviate/current/roadmap/feature-roadmap.html',
            ]
        },
        // TODO: add individual page redirects
        {
            to: '/developers/weaviate/',
            from: '/developers/weaviate/current/schema'
        },
        {
            to: '/developers/weaviate/',
            from: '/developers/weaviate/current/schema/datatypes.html'
        },
        {
            to: '/developers/weaviate/',
            from: '/developers/weaviate/current/schema/schema-configuration.html'
        },
        {
            to: '/developers/weaviate/',
            from: '/developers/weaviate/current/tutorials'
        },
        {
            to: '/developers/weaviate/',
            from: '/developers/weaviate/current/tutorials/example-datasets.html'
        },
        {
            to: '/developers/weaviate/',
            from: '/developers/weaviate/current/tutorials/how-to-create-a-schema.html'
        },
        {
            to: '/developers/weaviate/',
            from: '/developers/weaviate/current/tutorials/how-to-do-classification.html'
        },
        {
            to: '/developers/weaviate/',
            from: '/developers/weaviate/current/tutorials/how-to-perform-a-semantic-search.html'
        },
        {
            to: '/developers/weaviate/',
            from: '/developers/weaviate/current/tutorials/how-to-query-data.html'
        },
        {
            to: '/developers/weaviate/',
            from: '/developers/weaviate/current/tutorials/how-to-use-weaviate-without-modules.html'
        },
        {
            to: '/developers/weaviate/',
            from: '/developers/weaviate/current/tutorials/other-examples.html'
        },
        {
            to: '/developers/weaviate/',
            from: '/developers/weaviate/current/tutorials/quick-start-with-the-text2vec-contextionary-module.html'
        },
        {
            to: '/developers/weaviate/',
            from: '/developers/weaviate/current/tutorials/semantic-search-through-wikipedia.html'
        },
        {
            to: '/developers/weaviate/',
            from: '/developers/weaviate/current/tutorials/write-great-bug-reports.html'
        },
        {
            to: '/developers/weaviate/',
            from: '/developers/weaviate/current/vector-index-plugins'
        },
        {
            to: '/developers/weaviate/',
            from: '/developers/weaviate/current/vector-index-plugins/distances.html'
        },
        {
            to: '/developers/weaviate/',
            from: '/developers/weaviate/current/vector-index-plugins/hnsw.html'
        },
    ],
    createRedirects(existingPath) {
        if (existingPath.includes('/blog')) {
            // Redirect from /blog/2022/06/{X} to /blog/{X}
            return [
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
        if (existingPath.includes('/contributor-guide')) {
            return [
                existingPath.replace('/contributor-guide', '/contributor-guide/current'),
            ]
        }

        return undefined; // Return a falsy value: no redirect created
    },
}

module.exports = siteRedirects;

// TODO: add these pages
    // /resources.html
    // /resources/gsoc.html
    // /resources/gsod-summary.html
    // /resources/gsod.html

// /developers/weaviate/current/architecture
// /developers/weaviate/current/architecture/binary-passage-retrieval.html
// /developers/weaviate/current/architecture/cluster.html
// /developers/weaviate/current/architecture/interface.html
// /developers/weaviate/current/architecture/prefiltering.html
// /developers/weaviate/current/architecture/resources.html
// /developers/weaviate/current/architecture/storage.html
// /developers/weaviate/current/benchmarks
// /developers/weaviate/current/benchmarks/ann.html
// /developers/weaviate/current/client-libraries
// /developers/weaviate/current/client-libraries/cli.html
// /developers/weaviate/current/client-libraries/go.html
// /developers/weaviate/current/client-libraries/java.html
// /developers/weaviate/current/client-libraries/javascript.html
// /developers/weaviate/current/client-libraries/python.html
// /developers/weaviate/current/configuration
// /developers/weaviate/current/configuration/authentication.html
// /developers/weaviate/current/configuration/authorization.html
// /developers/weaviate/current/configuration/backups.html
// /developers/weaviate/current/configuration/modules.html
// /developers/weaviate/current/configuration/monitoring.html
// /developers/weaviate/current/configuration/persistence.html
// /developers/weaviate/current/configuration/vector-index-type.html
// /developers/weaviate/current/core-knowledge
// /developers/weaviate/current/core-knowledge/basics.html
// /developers/weaviate/current/core-knowledge/clients.html
// /developers/weaviate/current/core-knowledge/console.html
// /developers/weaviate/current/core-knowledge/indexing.html
// /developers/weaviate/current/getting-started
// /developers/weaviate/current/getting-started/import.html
// /developers/weaviate/current/getting-started/installation.html
// /developers/weaviate/current/getting-started/modules.html
// /developers/weaviate/current/getting-started/query.html
// /developers/weaviate/current/getting-started/schema.html
// /developers/weaviate/current/graphql-references
// /developers/weaviate/current/graphql-references/additional-properties.html
// /developers/weaviate/current/graphql-references/aggregate.html
// /developers/weaviate/current/graphql-references/explore.html
// /developers/weaviate/current/graphql-references/filters.html
// /developers/weaviate/current/graphql-references/get.html
// /developers/weaviate/current/graphql-references/vector-search-parameters.html
// /developers/weaviate/current/installation
// /developers/weaviate/current/installation/docker-compose.html
// /developers/weaviate/current/installation/kubernetes.html
// /developers/weaviate/current/installation/weaviate-cloud-service.html
// /developers/weaviate/current/modules
// /developers/weaviate/current/other-modules/custom-modules.html
// /developers/weaviate/current/other-modules/spellcheck.html
// /developers/weaviate/current/reader-generator-modules/ner-transformers.html
// /developers/weaviate/current/reader-generator-modules/qna-openai.html
// /developers/weaviate/current/reader-generator-modules/qna-transformers.html
// /developers/weaviate/current/reader-generator-modules/sum-transformers.html
// /developers/weaviate/current/retriever-vectorizer-modules/img2vec-neural.html
// /developers/weaviate/current/retriever-vectorizer-modules/multi2vec-clip.html
// /developers/weaviate/current/retriever-vectorizer-modules/ref2vec-centroid.html
// /developers/weaviate/current/retriever-vectorizer-modules/text2vec-cohere.html
// /developers/weaviate/current/retriever-vectorizer-modules/text2vec-contextionary.html
// /developers/weaviate/current/retriever-vectorizer-modules/text2vec-huggingface.html
// /developers/weaviate/current/retriever-vectorizer-modules/text2vec-openai.html
// /developers/weaviate/current/retriever-vectorizer-modules/text2vec-transformers.html

// /developers/weaviate/current/more-resources
// /developers/weaviate/current/more-resources/deprecation-messages.html
// /developers/weaviate/current/more-resources/example-datasets.html
// /developers/weaviate/current/more-resources/example-use-cases.html
// /developers/weaviate/current/more-resources/faq.html
// /developers/weaviate/current/more-resources/glossary.html
// /developers/weaviate/current/more-resources/migration-guide.html
// /developers/weaviate/current/more-resources/performance.html

// /developers/weaviate/current/restful-api-references
// /developers/weaviate/current/restful-api-references/backups.html
// /developers/weaviate/current/restful-api-references/batch.html
// /developers/weaviate/current/restful-api-references/classification.html
// /developers/weaviate/current/restful-api-references/meta.html
// /developers/weaviate/current/restful-api-references/modules.html
// /developers/weaviate/current/restful-api-references/nodes.html
// /developers/weaviate/current/restful-api-references/objects.html
// /developers/weaviate/current/restful-api-references/schema.html
// /developers/weaviate/current/restful-api-references/well-known.html

// /developers/weaviate/current/roadmap
// /developers/weaviate/current/roadmap/architectural-roadmap.html
// /developers/weaviate/current/roadmap/feature-roadmap.html

// /developers/contributor-guide/current
// /developers/contributor-guide/current/getting-started
// /developers/contributor-guide/current/getting-started/improving-docs.html
// /developers/contributor-guide/current/getting-started/commit-guidelines.html
// /developers/contributor-guide/current/getting-started/git-and-github.html
// /developers/contributor-guide/current/getting-started/reporting-bugs.html
// /developers/contributor-guide/current/getting-started/writing-blogs.html
// /developers/contributor-guide/current/getting-started/suggesting-enhancements.html
// /developers/contributor-guide/current/weaviate-core
// /developers/contributor-guide/current/weaviate-core/cicd.html
// /developers/contributor-guide/current/weaviate-core/parsing-cross-refs.html
// /developers/contributor-guide/current/weaviate-core/tests.html
// /developers/contributor-guide/current/weaviate-core/setup.html
// /developers/contributor-guide/current/weaviate-core/structure.html
// /developers/contributor-guide/current/weaviate-module-system/architecture.html
// /developers/contributor-guide/current/weaviate-module-system/how-to-build-a-new-module.html
// /developers/contributor-guide/current/weaviate-module-system/overview.html
// /developers/contributor-guide/current/weaviate-module-system
// /developers/contributor-guide/current/weaviate-clients
// /developers/contributor-guide/current/contextionary
// /developers/contributor-guide/current/contextionary/classification-benchmarks.html
