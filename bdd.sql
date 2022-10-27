--
-- code pour la création des tables
CREATE TABLE Materiaux (
  "id_mat" uuid,
  "libelle" varchar(255),
  "url" text,
  primary key ("id_mat")
);
 
CREATE TABLE Montre (
  "id_montre" uuid,
  "libelle" varchar(255),
  "ecran" varchar(255),
  "boitier" varchar(255),
  "bracelet" varchar(255),
  "commande" bool,
  "id_user" uuid,
  "id_mat" uuid,
  primary key ("id_montre"),
  foreign key ("id_user") references auth.users ("id"),
  foreign key ("id_mat") references Materiaux ("id_mat")
)


--
-- code pour la création des vues
CREATE VIEW allUsers AS
SELECT * From auth.users;
 
CREATE VIEW allMontres as
SELECT * From montre;
 
CREATE VIEW allMateriaux as
SELECT * From materiaux;
 
CREATE VIEW UsersMontres as
SELECT montre.* FROM montre, auth.users
WHERE id_user = auth.users.id;
 
CREATE VIEW MateriauxMontre as
SELECT Materiaux.* FROM materiaux, montre
WHERE materiaux.id_mat = montre.id_mat;




--
-- code pour la création des policies
CREATE POLICY "Delete for authentificated users " ON "public"."montre"
AS PERMISSIVE FOR DELETE
TO authenticated
USING (((uid() = id_user) AND (commande = false)))


CREATE POLICY "Enable insert for authenticated users only" ON "public"."montre"
AS PERMISSIVE FOR INSERT
TO authenticated

WITH CHECK ((uid() = id_user))


CREATE POLICY "Enable read access for authentificated users" ON "public"."montre"
AS PERMISSIVE FOR SELECT
TO authenticated
USING ((uid() = id_user))

 


CREATE POLICY "Enable update for authentificated users" ON "public"."montre"
AS PERMISSIVE FOR UPDATE
TO authenticated
USING (((uid() = id_user) AND (commande = false)))
WITH CHECK ((uid() = id_user))
