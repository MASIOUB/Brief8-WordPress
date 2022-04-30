<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'wordpress' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define( 'DB_COLLATE', '' );

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '9wH 960;KY2G-DQ!;6^B|a?iz2rgHq)u]qU!a-+1- Hb0.bGmbj#?ziRutokKL !' );
define( 'SECURE_AUTH_KEY',  '8Qyu6YLB-Wejvi!Ou3{q0(eJ5f ;z 1GZXOus:|w*a5t&HsKN2~i@ZwSh&#<m`4j' );
define( 'LOGGED_IN_KEY',    'vGk[/(UHa !Ma>{!18?=->np/to{hRBaRXC00fwutHEx6FxJB_B~HlP]^LO`@>B{' );
define( 'NONCE_KEY',        '##Zzke}q*.>,y=B%o=dzYn&:|m1(]*9Ll~ZWND7*2@.mJVr4KM89^IA?$@7Ls3!R' );
define( 'AUTH_SALT',        '.=!#2Obm9lHHMG?_+IB`R_STPR193=an{yU5W=!J:ibG>[umj8-k}IDLb<e^)|e8' );
define( 'SECURE_AUTH_SALT', '$>x.+Z)`-Gn@*{nBYC?g.$Xv8$OA^Av}i>KZ]u$T5GW}GAD#*.W/9I@9Sm%ckxVJ' );
define( 'LOGGED_IN_SALT',   'bXnS(t9PMREl7xi+~5-mHW>$v>2<op)< r8)[NO(MB#m-(1v-Aqdax,+PP?S(.-o' );
define( 'NONCE_SALT',       'nK|Q|<,[Ou$:{:fJZ<m 3|&S]jOv|ntyA,UERJBlw^fd6Au|ijbhu>^Ox{h9^o=r' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( ! defined( 'ABSPATH' ) )
  define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once( ABSPATH . 'wp-settings.php' );
