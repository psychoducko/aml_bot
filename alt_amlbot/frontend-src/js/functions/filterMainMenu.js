
export default function filterMainMenu(menu){
  menu = [...menu,
    {to: '/admin/swagger',
      id:'swagger',
      text: 'Swagger'},
  ]
  return menu
}
