export interface timeApiTS  {
    utc_offset: string;
    timezone: string;
    day_of_week: number;
    day_of_year: number;
    datetime: string;
    utc_datetime: string;
    unixtime: number;
    raw_offset: string;
    week_number: number;
    dst: boolean;
    abbreviation: string;
    dst_offset: number;
    dst_from: string,
    dst_until: string,
    client_ip: string
}

export interface IPLocationTS {
    data: {
        ip: string,
        hostname: string,
        type:string,
        range_type: {
            type: string,
            description: string
        },
        connection: {
            asn: number,
            organization: string,
            isp: string,
            range: string
        },
        location: {
            geonames_id: number,
            latitude:number,
            longitude: number,
            zip: string,
            continent: {
                code: string,
                name: string,
                name_translated: string,
                geonames_id: number,
                wikidata_id: string
            },
            country: {
                alpha2: string,
                alpha3: string,
                calling_codes: string[],
                currencies: currencyTS[],
                emoji: string,
                ioc: string,
                languages: languageTS[],
                name: string,
                name_translated: string,
                timezones: string[],
                is_in_european_union: boolean,
                fips: string,
                geonames_id: number,
                hasc_id: string,
                wikidata_id: string
            },
            city: {
                fips: any,
                alpha2: any,
                geonames_id: number,
                hasc_id: any,
                wikidata_id: string,
                name: string,
                name_translated: string
            },
            region: {
                fips: string,
                alpha2: string,
                geonames_id: number,
                hasc_id: string,
                wikidata_id: string,
                name: string,
                name_translated: string
            }
        },
        tlds: string[],
        timezone: {
            id: string,
            current_time: string,
            code: string,
            is_daylight_saving: false,
            gmt_offset: number
        },
        security: {
        is_anonymous: any,
        is_datacenter: any,
        is_vpn: any,
        is_bot: any,
        is_abuser: any,
        is_known_attacker: any,
        is_proxy: any,
        is_spam: any,
        is_tor: any,
        proxy_type: any,
        is_icloud_relay: any,
        threat_score: any
        },
        domains: {
            count: any,
            domains: string[]
        }
    } 
}

type currencyTS = {
    symbol: string,
    name: string,
    symbol_native: string,
    decimal_digits: number,
    rounding: number,
    code: string,
    name_plural: string,
    type: string
}

type languageTS = {
    name: string,
    name_native: string
}
