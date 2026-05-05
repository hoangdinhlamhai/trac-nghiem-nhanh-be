-- CreateTable
CREATE TABLE "discussions" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "content" TEXT,
    "excerpt" VARCHAR(500),
    "tag" VARCHAR(50),
    "author_name" VARCHAR(100) NOT NULL,
    "is_published" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "discussions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" TEXT NOT NULL,
    "discussion_id" TEXT NOT NULL,
    "author_name" VARCHAR(100) NOT NULL,
    "author_email" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "discussions_slug_key" ON "discussions"("slug");

-- CreateIndex
CREATE INDEX "comments_discussion_id_idx" ON "comments"("discussion_id");

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_discussion_id_fkey" FOREIGN KEY ("discussion_id") REFERENCES "discussions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
