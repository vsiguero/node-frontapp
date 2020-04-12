import { FrontAppClient } from './client';
import { TeammateIdsInterface } from './interfaces/team.interface';
export declare class Teams {
    constructor(client: FrontAppClient);
    client: FrontAppClient;
    list(f?: any): Promise<any>;
    get(team_id: object, f?: any): Promise<any>;
    addTeammate(team_id: string, params: TeammateIdsInterface, f?: any): Promise<any>;
    removeTeammate(team_id: string, params: TeammateIdsInterface, f?: any): Promise<any>;
    listGroups(team_id: string, f?: any): Promise<any>;
    createGroup(team_id: string, name: string, f?: any): Promise<any>;
}
