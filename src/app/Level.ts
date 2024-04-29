export class TestLevel {
    name: string = '';
    code: string = '';
}


export class Level {
    id: number = 0;
    description: string = '';
    templateCode: string = '';
    tests?: TestLevel[];
    templateTestCode?: string = '';

    public constructor(init?:Partial<Level>) {
        Object.assign(this, init);
    }
}