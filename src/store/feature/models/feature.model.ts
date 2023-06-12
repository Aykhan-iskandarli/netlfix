import { IFeatures } from "../types/features";


export class FeatureModel {
    public id: number | string | undefined;
    public description: string | undefined;
    public translations: [] | string | undefined;

    constructor(item: IFeatures) {
        this._setId(item);
        this._setDescription(item);
        this._setTranslations(item);
    }

    /**
    * set id
    * @param id
    * @private
    */

    private _setId({ _id }: IFeatures) {
        this.id = _id;
    }

    /**
  * set description
  * @param description
  * @private
  */

    private _setDescription({ description }: IFeatures) {
        this.description = description;
    }

 /**
  * set translations
  * @param translations
  * @private
  */

 private _setTranslations({ translations }: IFeatures) {
    this.translations = translations;
}

}