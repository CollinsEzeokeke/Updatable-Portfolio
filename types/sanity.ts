export interface HeaderDocument {
    _id: string
    _createdAt: string
    header: string
    bottom: string
    bottomOne: string
    bottomTwo: string
    bottomThree: string
    releaseDate: string
  }

  export interface FeatureSectionTypes {

  }

  export interface FeatureSectionTwoTypes {
    
  }

  export interface SanityImage {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt: string;
  }
  
  export interface AboutImageTypes {
    _type: 'Image';
  Image: SanityImage;
  }