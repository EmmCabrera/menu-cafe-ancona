Add-Type -AssemblyName System.Drawing
$orig = [System.Drawing.Bitmap]::FromFile((Get-Item 'assets\logo.png').FullName)
$w = $orig.Width
$h = $orig.Height

$minX = $w; $maxX = 0; $minY = $h; $maxY = 0

for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
        $c = $orig.GetPixel($x, $y)
        if ($c.A -gt 10 -and ($c.R -lt 240 -or $c.G -lt 240 -or $c.B -lt 240)) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Output "Bounds: minX=$minX maxX=$maxX minY=$minY maxY=$maxY (W=$w, H=$h)"
$orig.Dispose()
