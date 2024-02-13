{buildNpmPackage}:
buildNpmPackage {
  pname = "virgilribeyre.com";
  version = "1.0.0";

  src = ../.;

  npmDepsHash = "sha256-QuInZh2EX0DJNv/yxRl14w4KW+bZBQwQItTEcRUADbY=";

  installPhase = ''
    cp -r dist $out
  '';
}
