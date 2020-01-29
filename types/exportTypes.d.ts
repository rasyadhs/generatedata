import { DatabaseTypes } from '../src/plugins/exportTypes/SQL/SQL.types';

export type ExportTypeType = {

    // the main generation function for the Export Type
    generate: any;

    // the component used for rendering the Export Type settings
    settingsComponent: any;

    // the preview component
    previewComponent: any;
}

export type GeneralMetadataTypes = {
    dataType: 'number' | 'string' | 'boolean' | 'date';
}

export type ExportTypeMetadata = {
    general?: GeneralMetadataTypes;
    sql?: DatabaseTypes;
};
