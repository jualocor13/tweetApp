import { Team } from './team.model';
import { TeamService } from './team.service';
export declare class TeamController {
    private readonly teamService;
    constructor(teamService: TeamService);
    addTeam(req: any, title: string, msg: string): Promise<{
        id: import("mongoose").Document<unknown, {}, Team> & Omit<Team & {
            _id: import("mongoose").Types.ObjectId;
        }, never>;
    }>;
    getAllTeams(): Promise<Team[]>;
}
