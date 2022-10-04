import { AppService } from './app.service';
export interface ILocationListDto {
    locations: string[];
}
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    listLocations(): ILocationListDto;
}
