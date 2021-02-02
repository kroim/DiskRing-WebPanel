<?php
/**
 * Created by PhpStorm.
 * User: GaoComet
 * Date: 12/1/2017
 * Time: 1:03 PM
 */

?>
<style>
    .main-tb{
        margin-top: 10px;
        margin-left: 3%;
    }
</style>
<div class="row">
    <div id="myCarousel" class="carousel slide" data-ride="carousel" style="width: 100%;">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" style="">

            <div class="item active" style="">
                <div style="text-align: center">
                    <img src="<?php echo base_url('assets/images/1.png'); ?>" alt="Los Angeles" style="width: 70%;display: inline-block">
                </div>
                <div class="carousel-caption">
                    <h3 style="color: red;">Layer1</h3>
                </div>
            </div>

            <div class="item" style="">
                <div style="text-align: center">
                    <img src="<?php echo base_url('assets/images/2.png'); ?>" alt="Los Angeles" style="width: 70%;display: inline-block">
                </div>
                <div class="carousel-caption">
                    <h3 style="color: red;">Layer2</h3>
                </div>
            </div>

            <div class="item" style="">
                <div style="text-align: center">
                    <img src="<?php echo base_url('assets/images/3.png'); ?>" alt="Los Angeles" style="width: 70%;display: inline-block">
                </div>
                <div class="carousel-caption">
                    <h3 style="color: red;">Disk</h3>
                </div>
            </div>

        </div>

        <!-- Left and right controls -->
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</div>
<div class="row" id="jvm-platform" style="padding: 2% 3%;">
    <h2 style="color: darkred; text-align: center;">Java (software platform)</h2>
    <div class="col-md-5">
        <p>Java is a set of computer software and specifications developed by James Gosling at Sun Microsystems, which was later acquired by the Oracle Corporation, that provides a system for developing application software and deploying it in a cross-platform computing environment. Java is used in a wide variety of computing platforms from embedded devices and mobile phones to enterprise servers and supercomputers. Java applets, which are less common than standalone Java applications, were commonly run in secure, sandboxed environments to provide many features of native applications through being embedded in HTML pages. It's still possible to run Java in web browsers after most of them having dropped support for Java's VM.</p>
        <P>Writing in the Java programming language is the primary way to produce code that will be deployed as byte code in a Java virtual machine (JVM); byte code compilers are also available for other languages, including Ada, JavaScript, Python, and Ruby. In addition, several languages have been designed to run natively on the JVM, including Scala, Clojure and Apache Groovy. Java syntax borrows heavily from C and C++, but object-oriented features are modeled after Smalltalk and Objective-C.[10] Java eschews certain low-level constructs such as pointers and has a very simple memory model where objects are allocated on the heap (while some implementations e.g. all currently supported by Oracle, may use escape analysis optimization to allocating on the stack instead) and all variables of object types are references. Memory management is handled through integrated automatic garbage collection performed by the JVM.</P>
        <P>The current and only long-term-support (LTS) version is Java 8, and Java 10 the only rapid release version supported. Oracle recommended that Java SE 9 users upgrade to Java SE 9.0.4,[13] that was the final security update in March 2018, and since then Java 9 is no longer supported, so Oracle advices its users to "immediately transition" to Java 10. Oracle (and others) has announced that using older (than Java 8) versions of their JVM implementation presents serious risks, due to unresolved security issues. Java 6 (and 7) had last non-public security update in April 2018 (July and October forthcoming), and extended support for Java 6 will end in December 2018.</P>
        <div style="text-align: center; padding-top: 3%;">
            <a href="<?php echo base_url('uploads/java_jdk/jdk-8u171-windows-x64.exe'); ?>" class="btn btn-warning btn-lg">Download Java JDK <i class="glyphicon glyphicon-download-alt"></i></a>
        </div>
    </div>
    <div class="col-md-7">
        <h3 style="text-align: center;">How to install Java JDK on Windows 10 ( with JAVA_HOME )</h3>
        <iframe width="100%" height="450px" src="https://www.youtube.com/embed/Wp6uS7CmivE?autoplay=1" allowfullscreen></iframe>
    </div>
</div>
<div class="row" id="disk-program" style="padding: 2% 3%;">
    <h2 style="color: darkred; text-align: center;">Disk Program</h2>
    <div class="col-md-7">
        <video  width="100%" controls>
            <source src="<?php echo base_url('uploads/videos/customDisk.mp4')?>">
        </video>
    </div>
    <div class="col-md-5">
        <h3 style="text-align: center;">How to use Disk Program</h3>
        <p>You can download this program and run it.</p>
        <p>Before, you have to install java like above. Pleasure with this application.</p>
        <div style="text-align: center; padding-top: 3%;">
            <a class="btn btn-success btn-lg" href="<?php echo base_url($user['disk']); ?>" style="height: 50px;" download>Download Disk Program <i class="glyphicon glyphicon-download-alt"></i></a>
        </div>
    </div>
</div>
<div class="row" id="screensaver-program" style="padding: 2% 3%;">
    <h2 style="color: darkred; text-align: center;">ScreenSaver Program</h2>
    <div class="col-md-5">
        <h3 style="text-align: center;">How to use ScreenSaver Program</h3>
        <p>You can use ScreenSaver Program as your target.</p>
        <p>ScreenSaver program is working like System clock, if you turn of computer, the application will be working continue the rotation.</p>
        <div style="text-align: center; padding-top: 3%;">
            <a class="btn btn-success btn-lg" href="<?php echo base_url($user['screensaver']); ?>" download>Download ScreenSaver Program <i class="glyphicon glyphicon-download-alt"></i></a>
        </div>
    </div>
    <div class="col-md-7">
        <video  width="100%" controls>
            <source src="<?php echo base_url('uploads/videos/screensaver.mp4')?>">
        </video>
    </div>
</div>


