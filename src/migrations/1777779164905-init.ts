import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1777779164905 implements MigrationInterface {
    name = 'Init1777779164905'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`category\` (\`id\` varchar(36) NOT NULL, \`delete_time\` datetime(6) NULL, \`update_time\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`create_time\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`description\` text NULL COMMENT '描述', \`index\` int NOT NULL COMMENT '排序' DEFAULT '0', \`img\` varchar(255) NULL COMMENT '图片', \`online\` enum ('0', '1') NOT NULL COMMENT '是否上线' DEFAULT '1', \`name\` varchar(100) NOT NULL, UNIQUE INDEX \`IDX_23c05c292c439d77b0de816b50\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_23c05c292c439d77b0de816b50\` ON \`category\``);
        await queryRunner.query(`DROP TABLE \`category\``);
    }

}
