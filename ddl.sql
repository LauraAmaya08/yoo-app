SELECT * from publicacion;
DELETE from publicacion;
SELECT * from likes;
DELETE from likes;

DROP TABLE likes;
drop table likes_publicacion;

SELECT*from menciones_publicacion;

SELECT * from usuario;

select * from seguimiento WHERE id_user=6;

ALTER TABLE menciones_publicacion
ADD CONSTRAINT FKkpdxdkvmifjn080h9hxws3mhq FOREIGN KEY (publicacion_id) REFERENCES publicacion(id) ON DELETE CASCADE;
