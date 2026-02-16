export interface IFaqSection {
  section_id: number;
  section_name: string;
  faqs: IFaq[];
}

export interface IFaq {
  id: number;
  section_id: number;
  name: string;
  description: string;
  button_text: string;
  link_button: string;
  position: number;
}

export type FaqPageProps = {
  faqs: IFaqSection[];
  seoData: {
    page_name: string;
    seo_title: string;
    seo_description: string;
    seo_keywords: string;
  };
};
