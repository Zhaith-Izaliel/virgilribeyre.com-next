{
  description = "An opinionated bootstraper to create a Vue.js application, with
  first class Typescript support, powered by Vite.js";
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-23.11";
    flake-utils.url = "github:numtide/flake-utils";
    flake-compat = {
      url = "github:edolstra/flake-compat";
      flake = false;
    };
  };

  outputs = inputs: with inputs;
  flake-utils.lib.eachDefaultSystem (system:
    with import nixpkgs { inherit system; };
    let
      nodejs-package = pkgs.nodejs_21;
    in
    rec {
      workspaceShell = pkgs.mkShell {
        # nativeBuildInputs is usually what you want -- tools you need to run
        nativeBuildInputs = with pkgs; [
          nodejs-package
          node2nix
          gnumake
          nodePackages.typescript-language-server
        ];
      };

      devShells = {
        # nix develop
        "${system}".default = workspaceShell;
        default = workspaceShell;
      };
      packages = {
        default = (import ./nix {
          inherit pkgs system;
          nodejs = nodejs-package;
        }).package;
        shell = devShells.default;
      };
    }
  );
}

