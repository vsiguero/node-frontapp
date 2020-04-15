import { FrontAppClient, DefaultResponseInterface } from './client';
import { TeammateIdsInterface, TeamInterface } from './interfaces/team.interface';
import { ContactInterface } from './interfaces';
export declare class Teams {
    constructor(client: FrontAppClient);
    client: FrontAppClient;
    list(f?: any): Promise<ReadonlyArray<TeamInterface>>;
    get(team_id: object, f?: any): Promise<TeamInterface>;
    addTeammate(team_id: string, params: TeammateIdsInterface, f?: any): Promise<DefaultResponseInterface>;
    removeTeammate(team_id: string, params: TeammateIdsInterface, f?: any): Promise<DefaultResponseInterface>;
    listGroups(team_id: string, f?: any): Promise<ReadonlyArray<ContactInterface>>;
    createGroup(team_id: string, name: string, f?: any): Promise<DefaultResponseInterface>;
}
