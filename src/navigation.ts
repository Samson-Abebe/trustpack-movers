import { getPermalink, getBlogPermalink, } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Homes',
     
      links: [

        {
          text: 'Landing',
          href: getPermalink('/'),
        },
       
      ],
    },
    {
      text: 'Discovery',
      links: [   
        {
          text: 'Trust',
          href: getPermalink('/Trust'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        }, 
      ],
    },
    {
      text: 'Services',
      links: [
        {
          text: 'Home Mover',
          href: getPermalink('/Services/Home Mover'),
        },
        {
          text: 'Office Relocation',
          href: getPermalink('/Services/Office Relocation'),
        },
        {
          text: 'Packing & Unpacking',
          href: getPermalink('/Services/Packing & Unpacking'),
        },
     
        {
          text: 'Dismantling & Reassembly',
          href: getPermalink('/Services/Dismantling & Reassembly'),
        },
        {
          text: 'Storage Service',
          href: getPermalink('/Services/Storage Service'),
        },
        {
          text: 'Cleaning Service',
          href: getPermalink('/Services/Cleaning Service'),
        },
     
      ],
    },


    






    {
      text: 'Blog',
      href: getPermalink("/Blog"),
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'trustpack',
          href: getPermalink('tag/trustpack'),
        },
        {
          text: 'cost efficiency',
          href: getPermalink('tag/cost-efficiency'),
        },
        {
          text: 'corporate relocation',
          href: getPermalink('tag/corporate-relocation'),
        },
        {
          text: 'Addis adama',
          href: getPermalink('tag/addis-ababa-adama'),
        },
     ],
    },
  ],
  actions: [{ text: 'Contact us', href: getPermalink('/contact'), target: '_blank' }],
};


export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Residential Relocation' },
        { text: 'Office Relocation' },
        { text: 'Packing & Unpacking' },
        { text: 'TV Mounting & Electronics' },
      ],
    },
    {
      title: 'Specialized',
      links: [
        { text: 'Diplomatic Institutions' },
        { text: 'Warehouse & Cargo Freight' },
        { text: 'Glass & Fragile Care' },
        { text: 'Dismantling & Reassembly' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { text: '100% Responsibility' },
        { text: '4-Hour Fast Turnaround' },
        { text: 'Short & Long-Term Storage' },
        { text: 'Pre & Post-Move Cleaning' },
      ],
    },
    {
      title: 'Coverage',
      links: [
        { text: 'Addis Ababa Sub-cities' },
        { text: 'Condominium & High-Rise' },
        { text: 'Villas & Apartments' },
        { text: 'Regional State Transit' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms' },
    { text: 'Privacy' },
  ],
  socialLinks: [
    { ariaLabel: 'Telegram', icon: 'tabler:brand-telegram', href: 'https://t.me/+ndcozE8Xd2liMmFk' },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/251900000000' },
    { ariaLabel: 'Phone', icon: 'tabler:phone', href: 'tel:+251900000000' },
  ],
  footNote: `
    © ${new Date().getFullYear()} <span class="font-semibold text-primary">Trustpack Move</span>. All rights reserved.
  `,
};