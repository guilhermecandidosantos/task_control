CREATE TABLE IF NOT EXISTS "action" (
	"id" varchar(50) PRIMARY KEY NOT NULL,
	"title" varchar(100) NOT NULL,
	"created_at" integer DEFAULT extract(epoch from now()) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "task" (
	"id" varchar(50) PRIMARY KEY NOT NULL,
	"title" varchar(100) NOT NULL,
	"description" varchar(900) NOT NULL,
	"created_at" integer DEFAULT extract(epoch from now()) NOT NULL,
	"updated_at" integer,
	"finished_at" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "task_action" (
	"id" varchar(50) PRIMARY KEY NOT NULL,
	"task_id" varchar(100) NOT NULL,
	"action_id" varchar(50) NOT NULL,
	"description" varchar(500),
	"file" varchar(500),
	"initial_date" integer,
	"finish_date" integer,
	"total" integer
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "task_action" ADD CONSTRAINT "task_action_task_id_task_id_fk" FOREIGN KEY ("task_id") REFERENCES "public"."task"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "task_action" ADD CONSTRAINT "task_action_action_id_action_id_fk" FOREIGN KEY ("action_id") REFERENCES "public"."action"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
