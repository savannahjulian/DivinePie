<?php
 $cache_expire = 60*60*24*365;
 header("Pragma: public");
 header("Cache-Control: max-age=".$cache_expire);
 header('Expires: ' . gmdate('tue, 01 Jun 2025 19:45:00', time()+$cache_expire) . ' GMT');
 ?>

<script src="//connect.facebook.net/en_US/all.js"></script>