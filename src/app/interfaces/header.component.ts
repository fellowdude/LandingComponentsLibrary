export interface IProfileConfig {
    profileImage: string;
    profileName: string;
}
export interface IMenuSubOption {
    name: string;
    link: string;
}

export interface IMenuOption {
    name: string;
    link: string;
    subOptions?: Array<IMenuSubOption>; 
}

export interface IHeader {
    logo: string;
    menu?: Array<IMenuOption>;
    profile?: boolean;
    profileConfig?: IProfileConfig;
}