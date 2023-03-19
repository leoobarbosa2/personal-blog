import { NextSeoProps } from 'next-seo'

export const HOME_SEO_BASE_DATA: NextSeoProps = {
  title: 'Home | Leonardo Barbosa: Desenvolvedor front end',
  description:
    'Blog pessoal criado para me conectar com outros desenvolvedores e compartilhar conhecimento, verifique as postagens na aba blog e acesse as redes sociais através dos links.',
  openGraph: {
    url: 'https://github.com/leoobarbosa2.png',
  },
  canonical: process.env.APP_BASE_URL,
}

export const POSTS_SEO_BASE_DATA: NextSeoProps = {
  title: 'Posts | Leonardo Barbosa: Desenvolvedor front end',
  description:
    'Posts sobre tecnologias, desenvolvimento web e experiencias na área de desenvolvimento que envolvem front-end, javascript, typescript e mais.',

  canonical: `${process.env.APP_BASE_URL}/posts`,
}