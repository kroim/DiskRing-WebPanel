<?php
/**
 * Created by PhpStorm.
 * User: GaoComet
 * Date: 12/1/2017
 * Time: 5:31 PM
 */
?>
<div>
    <?php echo form_error('name','<span class="help-block">','</span>'); ?>
    <?php echo form_error('conf_password','<span class="help-block">','</span>'); ?>
    <form action="" method="post">
        <div class="form-group">
            <input type="text" class="form-control" name="name" placeholder="Name" required="" value="<?php echo !empty($userData['name'])?$userData['name']:''; ?>">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" name="password" placeholder="Password" required="">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" name="conf_password" placeholder="Confirm password" required="">
        </div>
        <div class="form-group">
            <?php
            if(!empty($user['permission'])){
                $permission = $userData['permission'];
            }else{
                $permission = '';
            }
            ?>
            <div class="register-permission">
                <input type="radio" name="permission" value="admin" <?php if($permission == 'admin' || $permission == '') echo 'checked'?> > admin<br>
                <input type="radio" name="permission" value="dispatcher" <?php if($permission == 'dispatcher') echo 'checked'?> > dispatcher<br>
                <input type="radio" name="permission" value="manager" <?php if($permission == 'manager') echo 'checked'?> > manager<br>
                <input type="radio" name="permission" value="general MGR" <?php if($permission == 'general MGR') echo 'checked'?> > general MGR
            </div>
        </div>
        <div class="form-group">
            <input type="submit" name="registerSubmit" class="btn-primary" value="Submit"/>
        </div>
    </form>
</div>
