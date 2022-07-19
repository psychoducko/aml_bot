import isProd from '../../../../../../helpers/isProd';

export default function addAdminScripts(scripts: string):string{
  scripts += isProd() ? `<script defer src="/altrp-plugins/swagger-ui/public/js/admin-scrips.js"></script>`
    : `<script defer src="http://localhost:3400/src/admin.js"></script>`
  return scripts
}
