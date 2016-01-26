module  kdc.models {

    export interface Excerpt {
        rendered: string;
    }

    export interface Guid {
        rendered: string;
    }

    export interface Title {
        rendered: string;
    }

    export interface Thumbnail {
        file: string;
        width: number;
        height: number;
        // mime-type: string;
        // source_url: string;
    }

    export interface Medium {
        file: string;
        width: number;
        height: number;
        // mime-type: string;
        // source_url: string;
    }

    export interface VantageCarousel {
        file: string;
        width: number;
        height: number;
        // mime-type: string;
        // source_url: string;
    }

    export interface Sizes {
        thumbnail: Thumbnail;
        medium: Medium;
        // vantage-carousel: VantageCarousel;
    }

    export interface ImageMeta {
        aperture: number;
        credit: string;
        camera: string;
        caption: string;
        created_timestamp: number;
        copyright: string;
        focal_length: number;
        iso: number;
        shutter_speed: number;
        title: string;
        orientation: number;
    }

    export interface MediaDetails {
        width: number;
        height: number;
        file: string;
        sizes: Sizes;
        image_meta: ImageMeta;
    }

    export interface Self {
        href: string;
    }

    export interface Collection {
        href: string;
    }

    export interface Reply {
        embeddable: boolean;
        href: string;
    }

    export interface Links {
        self: Self[];
        collection: Collection[];
        replies: Reply[];
    }

    export interface Media {
        id: number;
        date: Date;
        date_gmt: Date;
        guid: Guid;
        modified: Date;
        modified_gmt: Date;
        slug: string;
        type: string;
        link: string;
        title: Title;
        author: number;
        comment_status: string;
        ping_status: string;
        alt_text: string;
        caption: string;
        description: string;
        media_type: string;
        media_details: MediaDetails;
        post: number;
        source_url: string;
        _links: Links;
    }

     export interface Content {
        rendered: string;
        excerpt: string;
    }
    
    export interface Posts {
        id: number;
        date: Date;
        date_gmt: Date;
        guid: Guid;
        modified: Date;
        modified_gmt: Date;
        slug: string;
        type: string;
        link: string;
        title: Title;
        content:Content;
        author: number;
        featured_image: string;
        comment_status: string;
        ping_status: string;
        sticky: boolean;
        format: string;
        _links: Links;
        
        //added 
        mediaUrl: string;
        thumbnail_url: string;
     }

    export interface Post {
        id: number;
        date: Date;
        date_gmt: Date;
        guid: Guid;
        modified: Date;
        modified_gmt: Date;
        slug: string;
        type: string;
        link: string;
        title: Title;
        content: Content;
        excerpt: Excerpt;
        featured_image: string;
        comment_status: string;
        ping_status: string;
        sticky: boolean;
        format: string;
        _links: Links;

        //added
        thumbnail_url: string;

    }

    
}

