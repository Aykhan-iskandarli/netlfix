export interface IFeatures {
    _id: number | string | undefined
    description: string | undefined,
    translations:[] |string | undefined
}
export interface ITranslations {
    public description_en: string | undefined;
    public description_ru: string | undefined;
}


export interface IFeaturesReducerState {
   feature:[],
   featureLang:[],
   featureGetById:[],
   error:[]
}
