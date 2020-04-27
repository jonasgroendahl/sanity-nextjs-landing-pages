export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea66c55a4028d266438c84d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-navyno8c',
                  apiId: 'c2f57ee4-a9f5-4b08-b18c-75ce90de31c7'
                },
                {
                  buildHookId: '5ea66c562e556c3a14a8ea31',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-rb4yhjvm',
                  apiId: 'e775ab67-b843-4c04-bcda-54130ae31933'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jonasgroendahl/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-rb4yhjvm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
