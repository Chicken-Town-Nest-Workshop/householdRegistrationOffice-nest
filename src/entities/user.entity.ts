// user.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { SessionEntity } from './session.entity';
import { TokenEntity } from './token.entity';
import { UserAppMappingEntity } from './user-app-mapping.entity';
import { AuditLogEntity } from './audit-log.entity';
import { UserRoleMappingEntity } from './user-role-mapping.entity';

@Entity('user_table')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column({ length: 50, nullable: false })
  username: string;

  @Column({ length: 100, nullable: false })
  password_hash: string;

  @Column({ length: 100, nullable: true })
  email: string;

  @Column({ nullable: true })
  status: boolean;

  @Column({ length: 255, nullable: true })
  inhabitant_id: string;

  @OneToMany(() => SessionEntity, (session) => session.user)
  sessions: SessionEntity[];

  @OneToMany(() => TokenEntity, (token) => token.user)
  tokens: TokenEntity[];

  @OneToMany(() => UserAppMappingEntity, (mapping) => mapping.user)
  appMappings: UserAppMappingEntity[];

  @OneToMany(() => AuditLogEntity, (log) => log.user)
  auditLogs: AuditLogEntity[];

  @OneToMany(() => UserRoleMappingEntity, (mapping) => mapping.user)
  roleMappings: UserRoleMappingEntity[];
}
