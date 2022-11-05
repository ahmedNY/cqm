import { HttpException, HttpStatus } from '@nestjs/common';
import { CommandResponse } from './CommandResponse';

export class CommandError extends HttpException {
    success: boolean = false;

    constructor(
        readonly message: string,
        readonly code: string,
        readonly data: any = {},
        readonly status?: number = 500,
    ) {
        super(CommandResponse.error(message, code, data), status);
        this.name = 'CommandError';
    }

    getHttpResponse(): any {
        return CommandResponse.error(this.message, this.code, this.data);
    }
}
