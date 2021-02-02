<?php
/**
 * Created by PhpStorm.
 * User: GaoComet
 * Date: 12/1/2017
 * Time: 8:54 AM
 */
?>

<!DOCTYPE html>
<html>
<head>
    <title> Disk Program </title>
    <link href="<?php echo base_url()?>assets/bootstrap/dist/css/bootstrap.min.css">
    <style>
        .form-control{
            height: 30px;
            width: 180px;
            border-radius: 3px;
            border-style: solid;
            border-width: 2px;
            border-color: gray;
        }
        form{
            padding-left: 10px;
            text-align: center;
            font-size: 20px;
        }
        p{
            text-align: center;
        }
    </style>
    <link rel="icon" href="<?php echo base_url(); ?>assets/images/disk_icon.jpg">
</head>
<body style="background-image: url('<?php echo base_url()?>assets/images/sky.jpg'); background-size: 100%; margin: 0;">
<div style="padding-top: 10%; padding-left: 50%;">
    <div style=" width: 500px; height: 450px; background-color: darkblue;">
        <div style="width: 100%; padding-bottom: 7%">
            <img src="<?php echo base_url('assets/images/logo1.jpg')?>" style="width: 100%">
        </div>
        <?php
        if(!empty($success_msg)){
            echo '<p class="statusMsg" style="color: #000000; margin-top: 0">' .$success_msg.'</p>';
        }elseif(!empty($error_msg)){
            echo '<p class="statusMsg" style="color: red; margin-top: 0">'.$error_msg.'</p>';
        }
        ?>
<!--        <p style="text-align: center; font-size: 30px; color: #dd7c00; padding-top: 8%;"> Aircraft </p>-->
        <div style="width: 50%; padding-left: 25%">
            <form action="" method="post" style="color: yellow;">
                User Name
                <input type="text" style="font-size: 20px;" id="user-name" class="form-control" name="user-name" required>
                <br><br>
                Password
                <input type="password" style="font-size: 20px;" id="user-password" class="form-control" name="user-password" required>
                <br>
                <input type="submit" class="btn-success" name="loginSubmit" id="login-button" value="Login" style="width: 100px;margin-top: 30px;">
            </form>
        </div>
        <div style="text-align: center; background-color: white;">
            <div style="margin-top: -5px; padding-top: ;">
                <h4 style="color: darkblue; padding-top: 10px;">Roy Fender</h4>
                <h4 style="color: darkblue">crfender@comcast.net</h4>
                <h4 style="color: darkblue; padding-bottom: 10px;">0545969295</h4>
            </div>
        </div>
    </div>
</div>

</body>
</html>